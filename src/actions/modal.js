export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export const showModal = Content => ({
    type: MODAL_SHOW,
    Content
});

export const hideModal = () => ({
    type: MODAL_HIDE
});
