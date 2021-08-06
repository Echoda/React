import PropTypes from 'prop-types';

const types = {
    children: PropTypes.node,
    groupDatas: PropTypes.arrayOf(PropTypes.shape({ // 数据源
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })),
}

export default types;