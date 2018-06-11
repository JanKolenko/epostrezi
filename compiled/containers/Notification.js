import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAleo, { Font } from '../components/FontAleo';
// let test = [] as IUserOrders[];
export default class Notification extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.status_cell },
                React.createElement(FontAleo, { font: Font.Bold }, "Naro\u010Dila"))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    status_cell: {
        marginTop: 18,
        justifyContent: 'center',
        paddingLeft: 10,
        width: '100%',
        height: 30,
        backgroundColor: '#e1e1e1',
    }
});
//# sourceMappingURL=Notification.js.map