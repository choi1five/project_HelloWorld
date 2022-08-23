/* eslint-disable class-methods-use-this */
import Component from '../core/Component.js';
import { DatePicker } from './index.js';
import store from '../store/store.js';
import render from '../dom/render.js';

class NewTravelLogModal extends Component {
  render() {
    const {
      isShowModal,
      tripSchedule: { activeSelfNumberOfPeopleInputForm, title, numberOfPeople, startDate, endDate },
    } = this.props;

    const startDatePickerProps = {
      ...this.props.tripSchedule,
      inputId: 'newTripStartDate',
      calendarId: 'startDate',
      inputPlaceholder: '출발일',
      labelContent: '출발 날짜',
      date: startDate,
      startDate,
      endDate,
      unableType: 'none',
    };
    const endDatePickerProps = {
      ...this.props.tripSchedule,
      inputId: 'newTripEndDate',
      calendarId: 'endDate',
      inputPlaceholder: '도착일',
      labelContent: '도착 날짜',
      date: endDate,
      startDate,
      endDate,
      unableType: 'term',
    };

    const _datePickerStartDate = new DatePicker(startDatePickerProps).render();
    const _datePickerEndDate = new DatePicker(endDatePickerProps).render();

    const options = [
      { value: '1', content: '1명' },
      { value: '2', content: '2명' },
      { value: '3', content: '3명' },
      { value: '4', content: '4명' },
      { value: '5', content: '5명' },
    ];

    return `
    <!-- 새 일정 만들기 모달 -->
    <div class="dimmed__layer ${isShowModal === 'newTripScheduleModal' ? '' : 'hide'}">
      <div class="modal newTrip__popup">
        <div class="modal__header">
          <div class="modal__header__title">새 일정 만들기</div>
          <button class="modal__header__close__btn" aria-label="닫기"></button>
        </div>
        <form class="newTrip__popup__form">
          <div class="newTrip__popup__form__input">
            <label for="newTripTitle" class="a11yHidden">새 일정 제목</label>
            <input class="newTripTitle" type="text" name="newTripTitle" placeholder="예 : 5박 6일 유럽여행" value="${title}"/>
          </div>
          ${_datePickerStartDate}
          ${_datePickerEndDate}
          <div class="newTrip__popup__form__select">
            <label for="selectedPeople" class="a11yHidden">인원 수</label>
            <select name="selectedPeople" id="selectedPeople">
              <optgroup>
                ${options
                  .map(
                    ({ value, content }) =>
                      `<option value="${value}" ${numberOfPeople === +value ? 'selected' : ''}>${content}</option>`
                  )
                  .join('')}
                  <option value="6" ${numberOfPeople >= 6 ? 'selected' : ''}>직접입력</option>
              </optgroup>
            </select>
          </div>
          <div class="newTrip__popup__form__input self__input__form ${activeSelfNumberOfPeopleInputForm ? '' : 'hide'}">
            <label for="inputPeople" class="a11yHidden">인원 수 입력</label>
            <input class="inputPeople" id="inputPeople" type="number" name="inputPeople" placeholder="6명 이상은 직접 입력해주세요." value="${numberOfPeople}"/>
          </div>
          <button class="newTrip__popup__form__submit" type="button">새 일정 만들기</button>
        </form>
      </div>
    </div>
    `;
  }

  closeNewTripScheduleModal(e) {
    console.log('closeNewTripScheduleModal');
    if (e.target.matches('.modal__header__close__btn') || e.target.matches('.dimmed__layer'))
      store.state = {
        ...store.state,
        isShowModal: '',
        tripSchedule: {
          activeStartDateCalendar: false,
          activeEndDateCalendar: false,
          activeSelfNumberOfPeopleInputForm: false,
          activeCalendar: '',
          currentDate: new Date(),
          title: '',
          startDate: null,
          startDatePickerCurrentDate: new Date(),
          endDate: null,
          endDatePickerCurrentDate: new Date(),
          numberOfPeople: '',
        },
      };
  }

  inputTitle(e) {
    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        title: e.target.value,
      },
    };
  }

  inputNumberOfPeople(e) {
    store.state = {
      ...store.state,
      tripSchedule: {
        ...store.state.tripSchedule,
        numberOfPeople: +e.target.value,
      },
    };
  }

  changeSelfInputForm(e) {
    console.log('changeSelfInputForm');
    if (+e.target.value >= 6) {
      store.state = {
        ...store.state,
        tripSchedule: {
          ...store.state.tripSchedule,
          activeSelfNumberOfPeopleInputForm: true,
          numberOfPeople: +e.target.value,
        },
      };
    } else {
      store.state = {
        ...store.state,
        tripSchedule: {
          ...store.state.tripSchedule,
          activeSelfNumberOfPeopleInputForm: false,
          numberOfPeople: +e.target.value,
        },
      };
    }
  }

  submitTripSchedule(e) {
    console.log('submitTripSchedule');

    // 팝업 close
    store.state = {
      ...store.state,
      isShowModal: '',
    };

    // edit 페이지로 이동
    console.log(window.location.origin + '/trip-planner-edit');
    window.history.pushState({}, 'EditTripSchedule', window.location.origin + '/trip-planner-edit');
    render();
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.dimmed__layer', handler: this.closeNewTripScheduleModal },
      { type: 'input', selector: '.newTripTitle', handler: this.inputTitle },
      { type: 'input', selector: '.inputPeople', handler: this.inputNumberOfPeople },
      { type: 'change', selector: '.newTrip__popup__form__select', handler: this.changeSelfInputForm },
      { type: 'click', selector: '.newTrip__popup__form__submit', handler: this.submitTripSchedule },
    ];
  }
}

export default NewTravelLogModal;