import { _decorator, Component, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {

    @property({
        type:Node,
        tooltip:'Ground 1 is here'
    })
    public ground1: Node;

    @property({
        type:Node,
        tooltip:'Ground 2 is here'
    })
    public ground2: Node;

    @property({
        type:Node,
        tooltip:'Ground 3 is here'
    })
    public ground3: Node;

    //Create ground width variables
    public groundWidth1: number;
    public groundWidth2: number;
    public groundWidth3: number;

    public tempStartLocation1 = new Vec3;
    public tempStartLocation2 = new Vec3;
    public tempStartLocation3 = new Vec3;

    public gameSpeed: number = 50;

    onLoad(){
        this.startUp();
    } //initial startup function, does only once

    startUp(){
        this.groundWidth1 = this.ground1.getComponent(UITransform).width;
    }

    update(deltaTime: number) {
        
    }
}


