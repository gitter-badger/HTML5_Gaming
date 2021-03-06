'use strict';

class Preload {
    preload() {

        // Add preload sprite
        var tmpPreload = this.game.cache.getImage('preloader');
        this.loadingSprite = this.add.sprite(
            (this.game.width - tmpPreload.width) / 2,
            (this.game.height - tmpPreload.height) / 2,
            'preloader'
        );

        // run preload sprite
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.loadingSprite);

        // Load game assets here
        this.load.image('logo', 'assets/logo.png');
        this.load.image('grid', 'assets/grid.jpeg');
    }

    onLoadComplete() {
        this.game.state.start('menu', true, false);
    }
}

export default Preload;
