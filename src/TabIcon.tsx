import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = ({ focused, iconDefault, iconFocused, tintColor, size }) => {
    return (
        <Icon
            name={focused ? iconFocused : iconDefault}
            size={size}
            style={{ color: tintColor }}
        />
    );
};

this.TabIcon.propTypes = {
    focused: this.PropTypes.bool,
    iconDefault: this.PropTypes.string.isRequired,
    iconFocused: this.PropTypes.string.isRequired,
    tintColor: this.PropTypes.oneOfType([
      this.PropTypes.number,
      this.PropTypes.string
    ]),
    size: this.PropTypes.number
};

this.TabIcon.defaultProps = {
    focused: false,
    tintColor: 'orange',
    size: 28
};

export default TabIcon;