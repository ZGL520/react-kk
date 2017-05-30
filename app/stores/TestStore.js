/**
 * Created by YUN on 29/05/2017.
 */


import Reflux from'reflux';
const Actions = Reflux.createActions([
    'increment',
    'decrement',
    'changeBy'
]);

class TestStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {count: 23};
        this.listenToMany = (Actions);
    }

}
export default TestStore;