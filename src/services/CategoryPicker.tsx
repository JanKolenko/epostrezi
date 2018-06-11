import { observable } from 'mobx';

class CategoryPicker {

    @observable isFocused = 0;
}

export default new CategoryPicker();