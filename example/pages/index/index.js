import { connect } from 'mp-redux';
import { increase, decrease } from '../../store';

const mapStateToData = state => ({ ...state });

const mapDispatchToThis = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

Page(connect(mapStateToData, mapDispatchToThis)({
  onLoad(options) {
  },
}));
