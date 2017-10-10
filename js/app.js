var ViewModel= function(){
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


	this.incrementCounter=function(){
		this.clickCount(this.clickCount()+1);
	};
	this.nickname= ko.observableArray([
		"benny","tommy"
	]);
};

ko.applyBindings(new ViewModel());