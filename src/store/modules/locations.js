const state = {
    to: {},
    from: {}
}

const getters = {
    getMenuType(state) {
        return state.menuType
    }
}

const mutations = {
    changeSideMenuForMobile(state, strCurrentClasses) {

        const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x !== '' && x !== 'sub-show-temporary') : '';
        let nextClasses = '';
        if (currentClasses.includes('main-show-temporary')) {
            nextClasses = (currentClasses.filter(x => x !== 'main-show-temporary')).join(' ');
        } else {
            nextClasses = currentClasses.join(' ') + ' main-show-temporary';
        }

        state.menuType = nextClasses
        state.clickCount = 0
    }
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}
