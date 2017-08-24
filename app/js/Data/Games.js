class _Games extends Firebase {
    constructor() {
        super();
        this.node = 'games';
        this.data = null;
    }

    setData(data) {
        this.data = data;
        console.log(this.node, this.data);
    }

    getData() {
        return firebase.database().ref(`/${this.node}/`).once('value').then(snapshot => {
            this.setData(snapshot.val());
        });
    }

}

let Games = new _Games();