class _Constants {
    constructor() {
        this.SVG = {}
        this.COLOURS = {}
        this.years = [];
    }
}

let Constants = new _Constants();


for (let i = 2000; i <= 2050; i++) {
    Constants.years.push(i);
}
Constants.years.push(9999);


Constants.SVG["BACK"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 11.78125 2.28125 L 2.78125 11.28125 L 2.09375 12 L 2.78125 12.71875 L 11.78125 21.71875 L 13.21875 20.28125 L 5.9375 13 L 22 13 L 22 11 L 5.9375 11 L 13.21875 3.71875 L 11.78125 2.28125 z"></path></svg>';
Constants.SVG["USER"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 12 4 C 9.790861 4 8 5.790861 8 8 C 8 10.209139 9.790861 12 12 12 C 14.209139 12 16 10.209139 16 8 C 16 5.790861 14.209139 4 12 4 z M 12 14 C 5.9 14 4 18 4 18 L 4 20 L 20 20 L 20 18 C 20 18 18.1 14 12 14 z"></path></svg>';
Constants.SVG["DCN"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 18 2 L 18 5 L 0 5 L 0 7 L 18 7 L 18 10 L 23.3125 6 L 18 2 z M 5 15 C 3.7079818 15 2.6057178 15.844255 2.1875 17 L 0 17 L 0 19 L 2.1875 19 C 2.6057178 20.155745 3.7079818 21 5 21 C 6.2920182 21 7.3942822 20.155745 7.8125 19 L 9.1875 19 C 9.6057178 20.155745 10.707982 21 12 21 C 13.292018 21 14.394282 20.155745 14.8125 19 L 16.1875 19 C 16.605718 20.155745 17.707982 21 19 21 C 20.292018 21 21.394282 20.155745 21.8125 19 L 24 19 L 24 17 L 21.8125 17 C 21.394282 15.844255 20.292018 15 19 15 C 17.707982 15 16.605718 15.844255 16.1875 17 L 14.8125 17 C 14.394282 15.844255 13.292018 15 12 15 C 10.707982 15 9.6057178 15.844255 9.1875 17 L 7.8125 17 C 7.3942822 15.844255 6.2920182 15 5 15 z M 5 17 C 5.5641291 17 6 17.435871 6 18 C 6 18.564129 5.5641291 19 5 19 C 4.4358709 19 4 18.564129 4 18 C 4 17.435871 4.4358709 17 5 17 z M 12 17 C 12.564128 17 13 17.435872 13 18 C 13 18.564128 12.564128 19 12 19 C 11.435872 19 11 18.564128 11 18 C 11 17.435872 11.435872 17 12 17 z M 19 17 C 19.564128 17 20 17.435872 20 18 C 20 18.564128 19.564128 19 19 19 C 18.435872 19 18 18.564128 18 18 C 18 17.435872 18.435872 17 19 17 z"></path></svg>';
Constants.SVG["SYNC"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M12,18 c-1.655,0-3.138-0.69-4.223-1.777L6,18v-5h5l-1.814,1.814C9.907,15.541,10.896,16,12,16c1.474,0,2.75-0.81,3.444-2h2.206 C16.823,16.327,14.606,18,12,18z M18,11h-5l1.814-1.814C14.093,8.459,13.104,8,12,8c-1.474,0-2.75,0.81-3.444,2H6.35 C7.176,7.673,9.394,6,12,6c1.655,0,3.138,0.69,4.223,1.777L18,6V11z"></path></svg>';
Constants.SVG["USER_ROLES"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 9 4 C 6.790861 4 5 5.790861 5 8 C 5 10.209139 6.790861 12 9 12 C 11.209139 12 13 10.209139 13 8 C 13 5.790861 11.209139 4 9 4 z M 22.28125 6.8125 L 17.6875 11.5625 L 15.59375 9.5 L 14.1875 10.90625 L 17 13.71875 L 17.71875 14.4375 L 18.40625 13.6875 L 23.71875 8.1875 L 22.28125 6.8125 z M 9 14 C 2.9 14 1 18 1 18 L 1 20 L 17 20 L 17 18 C 17 18 15.1 14 9 14 z"></path></svg>';
Constants.SVG["MENU"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 12 3 C 10.895431 3 10 3.8954305 10 5 C 10 6.1045695 10.895431 7 12 7 C 13.104569 7 14 6.1045695 14 5 C 14 3.8954305 13.104569 3 12 3 z M 12 10 C 10.895431 10 10 10.895431 10 12 C 10 13.104569 10.895431 14 12 14 C 13.104569 14 14 13.104569 14 12 C 14 10.895431 13.104569 10 12 10 z M 12 17 C 10.895431 17 10 17.895431 10 19 C 10 20.104569 10.895431 21 12 21 C 13.104569 21 14 20.104569 14 19 C 14 17.895431 13.104569 17 12 17 z"></path></svg>';
Constants.SVG["SAVE"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 6 L 18 3 L 5 3 z M 8 4 L 16 4 L 16 9 L 8 9 L 8 4 z M 13 5 L 13 8 L 15 8 L 15 5 L 13 5 z M 7 12 L 17 12 C 17.6 12 18 12.4 18 13 L 18 18 C 18 18.6 17.6 19 17 19 L 7 19 C 6.4 19 6 18.6 6 18 L 6 13 C 6 12.4 6.4 12 7 12 z"></path></svg>';
Constants.SVG["DELETE"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5.625 4.21875 L 4.21875 5.625 L 10.59375 12 L 4.21875 18.375 L 5.625 19.78125 L 12 13.40625 L 18.375 19.78125 L 19.78125 18.375 L 13.40625 12 L 19.78125 5.625 L 18.375 4.21875 L 12 10.59375 L 5.625 4.21875 z"></path></svg>';
Constants.SVG["COPY"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 2 C 3.9 2 3 2.9 3 4 L 3 17 L 5 17 L 5 4 L 15 4 L 15 2 L 5 2 z M 9 6 C 7.9 6 7 6.9 7 8 L 7 20 C 7 21.1 7.9 22 9 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 8 C 20 6.9 19.1 6 18 6 L 9 6 z M 9 8 L 18 8 L 18 20 L 9 20 L 9 8 z"></path></svg>';
Constants.SVG["COPY_CIRCLE"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="sans-serif" font-weight="normal" font-size="12" text-anchor="start"><g><g><path d="M0,24l0,-24l24,0l0,24z" fill="none"></path><path d="M12,24c-6.62742,0 -12,-5.37258 -12,-12l0,0c0,-6.62742 5.37258,-12 12,-12l0,0c6.62742,0 12,5.37258 12,12l0,0c0,6.62742 -5.37258,12 -12,12z M12,23.04c6.09722,0 11.04,-4.94278 11.04,-11.04l0,0c0,-6.09722 -4.94278,-11.04 -11.04,-11.04l0,0c-6.09722,0 -11.04,4.94278 -11.04,11.04l0,0c0,6.09722 4.94278,11.04 11.04,11.04z" fill="#bdc3c7"></path><g><path d="M8.055,6.7c-0.583,0 -1.06,0.477 -1.06,1.06l0,6.89l1.06,0l0,-6.89l5.3,0l0,-1.06z M10.175,8.82c-0.583,0 -1.06,0.477 -1.06,1.06l0,6.36c0,0.583 0.477,1.06 1.06,1.06l4.77,0c0.583,0 1.06,-0.477 1.06,-1.06l0,-6.36c0,-0.583 -0.477,-1.06 -1.06,-1.06z M10.175,9.88l4.77,0l0,6.36l-4.77,0z"></path></g></g></g></g></svg>';
Constants.SVG["PASTE"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2h-4.2c-0.4-1.2-1.5-2-2.8-2S9.6,0.8,9.2,2H5C3.9,2,3,2.9,3,4v16c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V4 C21,2.9,20.1,2,19,2z M12,2c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1C11,2.4,11.4,2,12,2z M19,20H5V4h2v2h10V4h2V20z"></path></svg>';
Constants.SVG["PLUS"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 13 19 L 13 13 L 19 13 L 19 11 L 13 11 L 13 5 L 11 5 z"></path></svg>';
Constants.SVG["PLAY"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 7 5 L 7 19 L 19 12 Z "></path></svg>';
Constants.SVG["OK"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10.821,16.846l-3.692-3.685 l1.412-1.416l2.239,2.235l5.757-6.081l1.453,1.375L10.821,16.846z"></path></svg>';
Constants.SVG["ADD"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 13 19 L 13 13 L 19 13 L 19 11 L 13 11 L 13 5 L 11 5 z"></path></svg>';
Constants.SVG["CANCEL"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.9,15.5l-1.4,1.4L12,13.4l-3.5,3.5 l-1.4-1.4l3.5-3.5L7.1,8.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L13.4,12L16.9,15.5z"></path></svg>';
Constants.SVG["SEND"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 2 3 L 2 10.8125 L 18 12 L 2 13.1875 L 2 21 L 22 12 L 2 3 z"></path></svg>';

Constants.SVG["CALENDAR"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 6 2 L 6 4 L 5 4 C 3.9 4 3 4.9 3 6 L 3 20 C 3 21.1 3.9 22 5 22 L 19 22 C 20.1 22 21 21.1 21 20 L 21 6 C 21 4.9 20.1 4 19 4 L 18 4 L 18 2 L 16 2 L 16 4 L 8 4 L 8 2 L 6 2 z M 5 9 L 19 9 L 19 20 L 5 20 L 5 9 z M 12 13 L 12 18 L 17 18 L 17 13 L 12 13 z"></path></svg>';

Constants.SVG["SELECT_ALL"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 4 2 C 2.9 2 2 2.9 2 4 L 2 5 L 4 5 L 4 4 L 5 4 L 5 2 L 4 2 z M 7 2 L 7 4 L 9 4 L 9 2 L 7 2 z M 11 2 L 11 4 L 13 4 L 13 2 L 11 2 z M 15 2 L 15 4 L 17 4 L 17 2 L 15 2 z M 19 2 L 19 4 L 20 4 L 20 5 L 22 5 L 22 4 C 22 2.9 21.1 2 20 2 L 19 2 z M 2 7 L 2 9 L 4 9 L 4 7 L 2 7 z M 7 7 L 7 9 L 17 9 L 17 7 L 7 7 z M 20 7 L 20 9 L 22 9 L 22 7 L 20 7 z M 2 11 L 2 13 L 4 13 L 4 11 L 2 11 z M 7 11 L 7 13 L 17 13 L 17 11 L 7 11 z M 20 11 L 20 13 L 22 13 L 22 11 L 20 11 z M 2 15 L 2 17 L 4 17 L 4 15 L 2 15 z M 7 15 L 7 17 L 17 17 L 17 15 L 7 15 z M 20 15 L 20 17 L 22 17 L 22 15 L 20 15 z M 2 19 L 2 20 C 2 21.1 2.9 22 4 22 L 5 22 L 5 20 L 4 20 L 4 19 L 2 19 z M 20 19 L 20 20 L 19 20 L 19 22 L 20 22 C 21.1 22 22 21.1 22 20 L 22 19 L 20 19 z M 7 20 L 7 22 L 9 22 L 9 20 L 7 20 z M 11 20 L 11 22 L 13 22 L 13 20 L 11 20 z M 15 20 L 15 22 L 17 22 L 17 20 L 15 20 z"></path></svg>'
Constants.SVG["SELECT_CLEAR"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><g><g><path d="M0,24l0,-24l24,0l0,24z" fill="none"></path><g><path d="M16.55862,13l-9.55862,0l0,-2l10,0l0,1.93195l-0.1931,-0.18023z M20,15.35172l0,-0.35172l0.35172,0z M15,20.40776l0,-0.40776l0.43494,0z M12.84828,17l-5.84828,0l0,-2l7.61839,0l-0.51494,0.55172l-1.35172,1.35172z M4,19l0,1l1,0l0,2l-1,0c-1.1,0 -2,-0.9 -2,-2l0,-1z M20,2c1.1,0 2,0.9 2,2l0,1l-2,0l0,-1l-1,0l0,-2z M5,2l0,2l-1,0l0,1l-2,0l0,-1c0,-1.1 0.9,-2 2,-2z M4,15l0,2l-2,0l0,-2z M17,2l0,2l-2,0l0,-2z M22,11l0,2l-2,0l0,-2z M9,20l0,2l-2,0l0,-2z M13,20l0,2l-2,0l0,-2z M22,7l0,2l-2,0l0,-2z M9,2l0,2l-2,0l0,-2z M4,7l0,2l-2,0l0,-2z M4,11l0,2l-2,0l0,-2z M13,2l0,2l-2,0l0,-2z M17,7l0,2l-10,0l0,-2z"></path></g><g><g><path d="M24,16.85517l-1.35172,-1.35172l-2.89655,2.89655l-2.89655,-2.89655l-1.35172,1.35172l2.89655,2.89655l-2.89655,2.89655l1.35172,1.35172l2.89655,-2.89655l2.89655,2.89655l1.35172,-1.35172l-2.89655,-2.89655z"></path></g></g></g></g></g></svg>'

Constants.SVG["MARK_DOWN"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,9l6,7l6-7H6z"></path></svg>';

Constants.SVG["ARROW_ADVANCE"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M20.938,26.938l5.75,5.75l17.125-17.125v32.25h8v-32.25l17.125,17.125l5.75-5.75l-24-24l-2.875-2.75l-2.875,2.75L20.938,26.938z M43.813,95.813h8v-8h-8V95.813z M43.813,79.813h8v-8h-8V79.813z M43.813,63.813h8v-8h-8V63.813z"/></svg>';

Constants.SVG["NEW_GAME"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 4 4 C 3.476563 4 2.941406 4.183594 2.5625 4.5625 C 2.183594 4.941406 2 5.476563 2 6 L 2 18 C 2 18.523438 2.183594 19.058594 2.5625 19.4375 C 2.941406 19.816406 3.476563 20 4 20 L 14 20 L 14 18 L 4 18 L 4 8 L 20 8 L 20 14 L 22 14 L 22 6 C 22 5.476563 21.816406 4.941406 21.4375 4.5625 C 21.058594 4.183594 20.523438 4 20 4 Z M 6 10 L 6 12 L 8 12 L 8 10 Z M 10 10 L 10 12 L 18 12 L 18 10 Z M 6 14 L 6 16 L 8 16 L 8 14 Z M 10 14 L 10 16 L 18 16 L 18 14 Z M 19 16 L 19 19 L 16 19 L 16 21 L 19 21 L 19 24 L 21 24 L 21 21 L 24 21 L 24 19 L 21 19 L 21 16 Z "></path></svg>'