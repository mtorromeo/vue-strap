<template>
  <div class="datepicker">
    <div :class="{
      'input-group': (showResetButton || showPickerButton) && type != 'hidden'
    }">
      <input ref="input" :name="name" :tabindex="tabindex" :placeholder="placeholder" :disabled="disabled" :required="required" class="form-control datepicker-input" :type="type" @focus="show" @blur="close" :value="formattedValue" @input="formattedValue = $event.target.value" @keydown.up.prevent="incrementDay" @keydown.down.prevent="decrementDay" @keydown.33.prevent="incrementMonth" @keydown.34.prevent="decrementMonth">
      <a v-if="showResetButton && type != 'hidden'" class="input-group-addon close" :class="{disabled: disabled !== undefined}" @click.prevent="clear">
        &times;
      </a>
      <a v-if="showPickerButton" :class="{
        disabled: disabled !== undefined,
        'input-group-addon': type != 'hidden'
      }" @click.prevent="show" href="javascript:void(0)">
        <span :class="[iconset, iconset + '-calendar']"></span>
      </a>
    </div>

    <div ref="popup" class="datepicker-popup panel" tabindex="-1" @blur="close" v-if="displayDayView || displayMonthView || displayYearView">
      <div class="datepicker-inner" v-show="displayDayView">
        <div class="datepicker-body">
          <div class="datepicker-ctrl">
            <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
            <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
            <p @click="switchMonthView">{{stringifyDayHeader(date)}}</p>
          </div>
          <div class="datepicker-weekRange">
            <span v-for="w in weekRange">{{w}}</span>
          </div>
          <div class="datepicker-dateRange">
            <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date, event.target)">{{d.text}}</span>
          </div>
        </div>
      </div>

      <div class="datepicker-inner" v-show="displayMonthView">
        <div class="datepicker-body">
          <div class="datepicker-ctrl">
            <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
            <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
            <p @click="switchDecadeView">{{stringifyYearHeader(date)}}</p>
          </div>
          <div class="datepicker-monthRange">
            <span v-for="(m, index) in monthNames" :class="{
              'datepicker-dateRange-item-active': monthNames[month]  === m
            }" @click="monthSelect(index)">
              {{m.substr(0,3)}}
            </span>
          </div>
        </div>
      </div>

      <div class="datepicker-inner" v-show="displayYearView">
        <div class="datepicker-body">
          <div class="datepicker-ctrl">
            <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
            <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
            <p>{{stringifyDecadeHeader(date)}}</p>
          </div>
          <div class="datepicker-monthRange decadeRange">
            <span v-for="decade in decadeRange" :class="{
              'datepicker-dateRange-item-active': year === decade.text
            }" @click.stop="yearSelect(decade.text)">
              {{decade.text}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      tabindex: String,
      placeholder: String,
      disabled: String,
      required: String,
      value: String,
      type: {
        type: String,
        default: 'text',
      },
      format: {
        default: 'dd/MM/yyyy',
      },
      firstDayOfWeek: {
        type: Number,
        default: 1,
      },
      disabledDaysOfWeek: {
        type: Array,
        default () {
          return [];
        },
      },
      showResetButton: {
        type: Boolean,
        default: false,
      },
      showPickerButton: {
        type: Boolean,
        default: false,
      },
      iconset: {
        type: String,
        default: 'glyphicon',
      },
    },
    data() {
      return {
        dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        displayDayView: false,
        displayMonthView: false,
        displayYearView: false,
        monthNames: [
          'January', 'February', 'March',
          'April', 'May', 'June',
          'July', 'August', 'September',
          'October', 'November', 'December'
        ],
      };
    },
    mounted() {
      if (!this.value) {
        this.clear();
      }
      window.addEventListener('click', this.close);
    },
    beforeDestroy() {
      window.removeEventListener('click', this.close);
    },
    watch: {
      value() {
        this.$emit('input', this.value);
      },
      format(format, old) {
        const date = this.parse(this.value, old);
        this.value = this.stringify(date, format);
      },
    },
    computed: {
      date: {
        get() {
          let date = null;
          if (this.value) {
            date = this.parse(this.value);
          }
          return date ? date : this.parse(new Date());
        },
        set(value) {
          this.value = this.stringify(value);
        },
      },
      formattedValue() {
        if (!this.value) {
          return '';
        }
        return this.stringify(this.date, this.format);
      },
      weekRange() {
        const range = [];
        for (let i = 0; i < 7; i++) {
          range.push(this.dayNames[(i + this.firstDayOfWeek) % 7]);
        }
        return range;
      },
      decadeRange() {
        const decadeRange = [];
        const yearStr = this.year.toString();
        const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1;
        for (let i = 0; i < 12; i++) {
          decadeRange.push({
            text: firstYearOfDecade + i,
          });
        }
        return decadeRange;
      },
      dateRange() {
        const dateRange = [];

        const firstOfMonth = new Date(this.year, this.month, 1);
        let firstDayWeek = firstOfMonth.getDay();
        if (firstDayWeek === 0) {
          firstDayWeek = 7;
        }
        let numDaysOfPrevMonth = firstDayWeek - this.firstDayOfWeek;
        if (numDaysOfPrevMonth < 0) {
          numDaysOfPrevMonth += 7;
        }

        if (numDaysOfPrevMonth) {
          const preMonth = this.getYearMonth(this.year, this.month - 1);
          const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);

          for (let i = numDaysOfPrevMonth - 1; i >= 0; i--) {
            const dayText = prevMonthDayCount - i;
            dateRange.push({
              text: dayText,
              date: new Date(preMonth.year, preMonth.month, dayText),
              sclass: 'datepicker-item-gray',
            });
          }
        }

        const dayCount = this.getDayCount(this.year, this.month);
        for (let i = 1; i <= dayCount; i++) {
          const date = new Date(this.year, this.month, i);
          const week = date.getDay();
          let sclass = '';
          this.disabledDaysOfWeek.forEach(el => {
            if (week === parseInt(el, 10)) {
              sclass = 'datepicker-item-disable';
            }
          });

          if (i === this.day) {
            if (date.getFullYear() === this.year && date.getMonth() === this.month) {
              sclass = 'datepicker-dateRange-item-active';
            }
          }
          dateRange.push({
            text: i,
            date: date,
            sclass: sclass,
          });
        }

        const nextMonthNeed = 7 - (dayCount + numDaysOfPrevMonth) % 7;

        if (nextMonthNeed != 7) {
          const nextMonth = this.getYearMonth(this.year, this.month + 1);

          for (let i = 1; i <= nextMonthNeed; i++) {
            dateRange.push({
              text: i,
              date: new Date(nextMonth.year, nextMonth.month, i),
              sclass: 'datepicker-item-gray',
            });
          }
        }

        return dateRange;
      },
      year() {
        return this.date.getFullYear();
      },
      month() {
        return this.date.getMonth();
      },
      day() {
        return this.date.getDate();
      },
    },
    methods: {
      close(e) {
        if (e && e.type == 'click' && this.$el.contains(e.target)) {
          return;
        }
        if (e && e.type == 'blur' && this.$el.contains(e.relatedTarget)) {
          return;
        }
        this.displayDayView = this.displayMonthView = this.displayYearView = false;
      },
      toggle(e) {
        if (e && this.disabled !== undefined) {
          return;
        }
        if (e.target.nodeName == 'INPUT' && this.showPickerButton) {
          return;
        }
        this.displayDayView = !(this.displayMonthView || this.displayYearView || this.displayDayView);
      },
      show(e) {
        if (e && this.disabled !== undefined) {
          return;
        }
        this.displayDayView = true;
      },
      clear(e) {
        if (e && this.disabled !== undefined) {
          return;
        }
        if (this.required !== undefined) {
          this.date = new Date();
        } else {
          this.value = '';
        }
      },
      preNextDecadeClick(flag) {
        if (flag === 0) {
          this.date = new Date(this.year - 10, this.month, this.day);
        } else {
          this.date = new Date(this.year + 10, this.month, this.day);
        }
      },
      preNextMonthClick(flag) {
        if (flag === 0) {
          const preMonth = this.getYearMonth(this.year, this.month - 1);
          this.date = new Date(preMonth.year, preMonth.month, this.day);
        } else {
          const nextMonth = this.getYearMonth(this.year, this.month + 1);
          this.date = new Date(nextMonth.year, nextMonth.month, this.day);
        }
      },
      preNextYearClick(flag) {
        if (flag === 0) {
          this.date = new Date(this.year - 1, this.month, this.day);
        } else {
          this.date = new Date(this.year + 1, this.month, this.day);
        }
      },
      yearSelect(year) {
        this.displayYearView = false;
        this.displayMonthView = true;
        this.date = new Date(year, this.month, this.day);
      },
      daySelect(date, el) {
        if (el.classList[0] === 'datepicker-item-disable') {
          return false;
        } else {
          this.date = date;
          this.displayDayView = false;
        }
      },
      switchMonthView() {
        this.displayDayView = false;
        this.displayMonthView = true;
      },
      switchDecadeView() {
        this.displayMonthView = false;
        this.displayYearView = true;
      },
      monthSelect(index) {
        this.displayMonthView = false;
        this.displayDayView = true;
        this.date = new Date(this.year, index, this.day);
      },
      getYearMonth(year, month) {
        if (month > 11) {
          year++;
          month = 0;
        } else if (month < 0) {
          year--;
          month = 11;
        }
        return {
          year: year,
          month: month
        };
      },
      stringifyDecadeHeader(date) {
        const yearStr = date.getFullYear().toString();
        const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
        const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
        return `${firstYearOfDecade}-${lastYearOfDecade}`;
      },
      stringifyDayHeader(date) {
        return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
      },
      parseMonth(date) {
        return this.monthNames[date.getMonth()];
      },
      stringifyYearHeader(date) {
        return date.getFullYear();
      },
      stringify(date, format = this.format) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const monthName = this.parseMonth(date);

        return format
          .replace(/yyyy/g, year)
          .replace(/MMMM/g, monthName)
          .replace(/MMM/g, monthName.substring(0, 3))
          .replace(/MM/g, ('0' + month).slice(-2))
          .replace(/dd/g, ('0' + day).slice(-2))
          .replace(/yy/g, year)
          .replace(/M(?!a)/g, month)
          .replace(/d/g, day);
      },
      parse(str, format = this.format) {
        if (str.length == 10 && (format == 'dd-MM-yyyy' || format == 'dd/MM/yyyy')) {
          str = str.substring(3, 5) + '-' + str.substring(0, 2) + '-' + str.substring(6, 10);
        }
        const date = new Date(str);
        return isNaN(date.getFullYear()) ? null : date;
      },
      getDayCount(year, month) {
        const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (month === 1) {
          if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            return 29;
          }
          return 28;
        }

        return dict[month];
      },
      incrementDay() {
        const newdate = new Date(this.date);
        newdate.setDate(newdate.getDate() + 1);
        this.date = newdate;
      },
      decrementDay() {
        const newdate = new Date(this.date);
        newdate.setDate(newdate.getDate() - 1);
        this.date = newdate;
      },
      incrementMonth() {
        const newdate = new Date(this.date);
        newdate.setMonth(newdate.getMonth() + 1);
        this.date = newdate;
      },
      decrementMonth() {
        const newdate = new Date(this.date);
        newdate.setMonth(newdate.getMonth() - 1);
        this.date = newdate;
      },
    },
  }
</script>

<style>
  .datepicker {
    position: relative;
    display: inline-block;
  }

  .datapicker a.disabled {
    cursor: not-allowed;
  }

  .datepicker .input-group-addon.close {
    float: none;
    opacity: 1;
    line-height: .5;
    border-left: 0;
  }

  .datepicker-popup {
    position: absolute;
    margin-top: 2px;
    z-index: 1000;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }

  .datepicker-inner {
    width: 218px;
  }

  .datepicker-body {
    padding: 10px 10px;
  }

  .datepicker-ctrl p,
  .datepicker-ctrl span,
  .datepicker-body span {
    display: inline-block;
    width: 28px;
    line-height: 28px;
    height: 28px;
    border-radius: 4px;
  }

  .datepicker-ctrl p {
    width: 65%;
  }

  .datepicker-ctrl span {
    position: absolute;
  }

  .datepicker-body span {
    text-align: center;
  }

  .datepicker-monthRange span {
    width: 48px;
    height: 50px;
    line-height: 45px;
  }

  .datepicker-item-disable {
    background-color: white!important;
    cursor: not-allowed!important;
  }

  .decadeRange span:first-child,
  .decadeRange span:last-child,
  .datepicker-item-disable,
  .datepicker-item-gray {
    color: #999;
  }

  .datepicker-dateRange-item-active:hover,
  .datepicker-dateRange-item-active {
    background: rgb(50, 118, 177)!important;
    color: white!important;
  }

  .datepicker-monthRange {
    margin-top: 10px
  }

  .datepicker-monthRange span,
  .datepicker-ctrl span,
  .datepicker-ctrl p,
  .datepicker-dateRange span {
    cursor: pointer;
  }

  .datepicker-monthRange span:hover,
  .datepicker-ctrl p:hover,
  .datepicker-ctrl i:hover,
  .datepicker-dateRange span:hover,
  .datepicker-dateRange-item-hover {
    background-color: #eeeeee;
  }

  .datepicker-weekRange span {
    font-weight: bold;
  }

  .datepicker-label {
    background-color: #f8f8f8;
    font-weight: 700;
    padding: 7px 0;
    text-align: center;
  }

  .datepicker-ctrl {
    position: relative;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    text-align: center;
  }

  .month-btn {
    font-weight: bold;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .datepicker-preBtn {
    left: 2px;
  }

  .datepicker-nextBtn {
    right: 2px;
  }
</style>
