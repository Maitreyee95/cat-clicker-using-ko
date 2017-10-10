var Cat=function(){
	this.clickCount=ko.observable(0);
	this.name=ko.observable('Ben');
	this.imgSrc=ko.observable('img/9648464288_2516b35537_z.jpg');
	this.catLevel=ko.computed(function(){
		if(this.clickCount()<10){
			return "newborn";
		}
		else if(this.clickCount()<20){
			return "infant";
		}else{
			return "ninja";
		}
	},this);
	this.nickname= ko.observableArray(["benny","tommy"]);

};
var ViewModel= function(){
	// var self= this; //self refers to the binding context of ViewModel
	this.currentCat= ko.observable( new Cat());
	this.incrementCounter=function(){
		// this.currentCat().clickCount(this.currentCat().clickCount()+1);//without 'with' in Dom,while clicking the image,we were in the binding context of ViewModel()
		this.clickCount(this.clickCount()+1); //with the 'with' binding in DOM
											  //we are already in the binding context of currentCat(). so we cant mention it again.
											  //here 'this' refers to the binding context of currentCat()
	//--another solution
	 // self.currentCat().clickCount(self.currentCat().clickCount()+1); //we are still using 'with' but here,we are using binding context pf ViewModel.this too works
	};

};

ko.applyBindings(new ViewModel());