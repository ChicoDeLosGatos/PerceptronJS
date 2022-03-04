function Perceptron (data=5000, reps=5000, learn=0.1){
    this.entries = data;
    this.learn = learn;
    this.reps = reps;
    this.weights = [];
    for(;data>0;data--) this.weights.push(Math.random());
}

Perceptron.prototype.predict = function (data) {
    let calc = 0.00;
    this.weights.forEach((w,n) => {
        calc += data[n]*w;
    });
    return (calc>0)*1;
}

Perceptron.prototype.call_train = function (entries, value){
    let predict = this.predict(entries);
    let fail = value-predict;
    if(fail!=0)
        for(var w in this.weights)
            this.weights[w] += this.learn * fail * entries[w];
    return fail;
}

Perceptron.prototype.train = function (data) {
    for(loop=0;loop<this.reps;loop++){
        data.forEach(d => {
            let _out = d[2];
            let _in = [1];
          	this.weights.forEach((w,n) => {
              if(n < d.length-1) {_in.push(d[n]);}
            })
            this.call_train(_in, _out);
        })
    }
}
