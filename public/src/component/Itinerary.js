/* eslint-disable import/extensions */
import Component from '../core/Component.js';
import myMap from './myMap.js';
import store from '../store/store.js';

class Itinerary extends Component {
  render() {
    const { currentId, schedule } = store.state.itinerary;
    // prettier-ignore
    return `
    <div class="itinerary__container">
      <!-- google map -->
      <div id="googleMap" class="map"></div>
       <!-- carousel -->
      <div class="carousel">
        <div class="carousel__days">
        ${
          schedule.map((shed, i) => `
            <div class="carousel__day-index" data-id=${shed.id}>
              <button class="carousel__day-index--add" data-id=${shed.id}>+</button>Day ${i + 1} <span>/</span> ${shed.date} ${shed.day}
              ${currentId === shed.id ? `
                <ul class="carousel__days__add--list">
                  <li class="carousel__days__add--item first-item prev--add--item">앞에 추가</li>
                  <li class="carousel__days__add--item next--add--item">뒤에 추가</li>
                  <li class="carousel__days__add--item delete--item">일정 삭제</li>
                </ul>
              `: ''}
              <div>${shed.country}</div>
            </div>`).join('')
        }
      </div>
      <button class="prev--btn carousel--btn">〈</button>
      <button class="next--btn carousel--btn">〉</button>

      <!--<ul class="carousel__days__add--list" style="display:none">
        <li class="carousel__days__add--item first-item prev--add--item">앞에 추가</li>
        <li class="carousel__days__add--item next--add--item">뒤에 추가</li>
        <li class="carousel__days__add--item delete--item">일정 삭제</li>
      </ul> -->

    </div>

    <!-- time table -->
    <div class="time-table">
      <ul class="time-table__times">
        <li class="time-table__time-item">
          <span class="time-table__time">00:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">01:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">02:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">03:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">04:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">05:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">06:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">07:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">08:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">09:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">10:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">11:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">12:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">13:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">14:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">15:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">16:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">17:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">18:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">19:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">20:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">21:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">22:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">23:00</span>
          <span class="line"></span>
        </li>
        <li class="time-table__time-item">
          <span class="time-table__time">24:00</span>
          <span class="line"></span>
        </li>
      </ul>
      <div class="time-table__day-index">
        <ul class="time-table__day-index__blank">
          <li>
            <div class="itinerary-card itinerary-card--check">
              <div class="itinerary-card-emph"></div>
              <div class="itinerary-card--check__content">
                <div class="itinerary-card--check__title">
                  히드로 공항
                </div>
                <div class="itinerary-card--check__memo">
                  공항 도착해서 유심칩 찾기
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="itinerary-card">
              <button class="itinerary-card--add">+</button>
            </div>
          </li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
          <li><div class="itinerary-card"></li>
        </ul>
        <ul class="time-table__day-index__blank">
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
        </ul>
        <ul class="time-table__day-index__blank">
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
          <li>
            <span class="time"></span>
            <span class="line"></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- private & public button -->
    <div class="itinerary-btns">
      <button class="itinerary-btns--private">나만의 일정</button>
      <button class="itinerary-btns--public">다른 사람들에게도 공유하기</button>
      </div>
      
      </div>;`
  }

  stopAddDays() {
    const { itinerary } = store.state;
    const { schedule } = itinerary;

    if (schedule.length > 31) {
      alert('더이상 생성하지 맙시다');
    }

    store.state = {
      itinerary: {
        ...itinerary,
        schedule: [...schedule, { id: 5, country: '독일', date: '08.18', day: 'Wed' }],
      },
    };
    console.log(store.state.itinerary.schedule);
  }

  buttonHandler(e) {
    const { itinerary } = store.state;
    if (e.target.matches('.carousel__day-index--add')) {
      store.state = { itinerary: { ...itinerary, currentId: +e.target.dataset.id } };
      console.log(store.state.itinerary);
      return;
    }
    if (!e.target.closest('.carousel__days__add--list')) {
      store.state = { itinerary: { ...itinerary, currentId: '' } };
    }
  }

  deleteSchedule(e) {
    const {
      itinerary,
      itinerary: { schedule },
    } = store.state;

    if (!e.target.classList.contains('delete--item')) return;

    const restItems = schedule.filter(sched => sched.id !== +e.target.closest('.carousel__day-index').dataset.id);

    console.log(restItems);
    store.state = {
      itinerary: {
        ...itinerary,
        currentId: '',
        schedule: [...restItems],
      },
    };

    // if (schedule.length < 1) {
    //   store.state = {
    //     itinerary: {
    //       ...store.state.itinerary,
    //       // schedule: [],
    //       // currentId: '',
    //       currentId: '',
    //     },
    //   };
    // }
    // console.log(store.state.itinerary.currentId);
  }

  addScheduleBefore(e) {
    if (!e.target.classList.contains('prev--add--item')) return;

    // store.state = {
    //   itinerary: {
    //     schedule: [],
    //     currentId: ''
    //   }
    // }
    const { itinerary } = store.state;
    const { schedule } = itinerary;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    const idx = schedule.findIndex(sched => sched.id === id);

    // 앞에 추가 로직
    const beforeArr = schedule.filter((_, i) => i < idx); // id = 0
    const afterArr = schedule.filter((_, i) => i >= idx);
    // const beforeArr = schedule.slice(0, idx); // id = 0
    // const afterArr = schedule.slice(idx);

    console.log(id);
    console.log(beforeArr);
    console.log(afterArr);
    store.state = {
      itinerary: {
        ...itinerary,
        currentId: '',
        schedule: [...beforeArr, { id: 5, country: '스페인', date: '08.14', day: 'Sat' }, ...afterArr],
      },
    };
  }

  addScheduleAfter(e) {
    if (!e.target.classList.contains('next--add--item')) return;
    const { itinerary } = store.state;
    const { schedule } = itinerary;
    const id = +e.target.closest('.carousel__day-index').dataset.id;

    // 뒤에 추가 로직
    // const beforeArr = schedule.filter((_, i) => i <= id); // id = 0
    // const afterArr = schedule.filter((_, i) => i > id);

    // index 찾기
    let idx;
    schedule.forEach((sched, i) => {
      if (sched.id === id) idx = i;
    });
    const beforeArr = schedule.filter((_, i) => i <= idx); // id = 0
    const afterArr = schedule.filter((_, i) => i > idx);

    console.log(e.target.closest('.carousel__day-index'));
    console.log(id);
    console.log(beforeArr);
    console.log(afterArr);
    store.state = {
      itinerary: {
        ...itinerary,
        currentId: '',
        schedule: [...beforeArr, { id: 5, country: '스페인', date: '08.14', day: 'Sat' }, ...afterArr],
      },
    };
  }

  addEventListener() {
    return [
      { type: 'DOMContentLoaded', selector: 'window', handler: myMap },
      { type: 'click', selector: '.next--btn', handler: this.stopAddDays },
      { type: 'click', selector: '.itinerary__container', handler: this.buttonHandler },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        component: 'next--add--item',
        handler: this.addScheduleAfter,
      },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        component: 'prev--add--item',
        handler: this.addScheduleBefore,
      },
      {
        type: 'click',
        selector: '.carousel__days__add--list',
        component: 'delete--item',
        handler: this.deleteSchedule,
      },
    ];
  }
}

export default Itinerary;