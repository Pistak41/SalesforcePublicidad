const app = {

    init: () => {
        console.log('init page');
        app.page.changeImage();
    },

    page: {

        changeImage: () => {
            setTimeout( () => {
                let random = Math.floor(Math.random() * 3);
                $("section").css("background-image", `url(./assets/banner${random}.webp)`);
                app.page.changeImage();
            }, 4000);
            
        }
    }

}

app.init();