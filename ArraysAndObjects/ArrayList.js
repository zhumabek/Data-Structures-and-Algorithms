class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const ans = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return ans;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const ans = this.data[index];
        this._collapseTo(index);
        return ans;
    }
    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    serialize() {
        let res =  '['
        const keys = Object.keys(this.data).sort()
        keys.forEach(k => {
            if(k == keys.length - 1){
                res += ` ${this.data[k]} `
            } else {
                res += ` ${this.data[k]}, `
            }
        })

        res += ']'

        return res
    }
}

const arr = new ArrayList()

arr.push(1)
arr.push(4)
arr.push(6)
arr.push(0)
console.log(arr.serialize())