import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class EditTripTab extends Component {
  render() {
    const { selectedTab } = store.state;
    return `
    <div class="trip-itinerary__tab">
      <div class="trip-itinerary__tab__chart ${selectedTab === 'chart' ? 'selected' : ''}">지도/일정표</div>
      <div class="trip-itinerary__tab__story ${selectedTab === 'story' ? 'selected' : ''}">스토리</div>
    </div>
    `;
  }

  renderSelectedContent(e) {
    const selectedTab = e.target.classList.contains('trip-itinerary__tab__chart') ? 'chart' : 'story';

    store.state = {
      selectedTab,
    };
  }

  addEventListener() {
    return [
      { type: 'click', selector: '.trip-itinerary__tab__chart', handler: this.renderSelectedContent },
      { type: 'click', selector: '.trip-itinerary__tab__story', handler: this.renderSelectedContent },
    ];
  }
}

export default EditTripTab;
