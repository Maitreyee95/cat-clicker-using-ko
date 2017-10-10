var initialCats=[
{
	clickCount:0,
	name:"Tabby",
	imgSrc: "img/cat1.jpg",
	nickname:['Tab']
},
{
	clickCount:0,
	name:"Tommy",
	imgSrc: "img/cat2.jpg",
	nickname:['Tom']
},
{
	clickCount:0,
	name:"Benny",
	imgSrc: "img/cat3.jpg",
	nickname:['Ben']
},
{
	clickCount:0,
	name:"Bobby",
	imgSrc: "img/cat4.jpg",
	nickname:['Bob']
},
{
	clickCount:0,
	name:"Bonny",
	imgSrc: "img/cat5.jpg",
	nickname:['Bon']
}
];


var Cat=function(data){
	this.clickCount=ko.observable(data.clickCount);
	this.name=ko.observable(data.name);
	this.imgSrc=ko.observable(data.imgSrc);
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
	this.nickname= ko.observableArray(data.nickname);

};


var ViewModel= function(){
	var self= this; //self refers to the binding context of ViewModel

	this.catList= ko.observableArray([]);//this=viewmodel
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));

	});

	this.currentCat= ko.observable(this.catList()[0]); //this=ViewModel
	this.incrementCounter=function(){
		// this.currentCat().clickCount(this.currentCat().clickCount()+1);//without 'with' in Dom,while clicking the image,we were in the binding context of ViewModel()
		// this.clickCount(this.clickCount()+1); //with the 'with' binding in DOM
											  //we are already in the binding context of currentCat(). so we cant mention it again.
											  //here 'this' refers to the binding context of currentCat()
		//--another solution
		 self.currentCat().clickCount(self.currentCat().clickCount()+1); //we are still using 'with' but here,we are using binding context pf ViewModel.this too works
	};

	this.setCat=function(clickedCat){ //passing the model we clicked on
		self.currentCat(clickedCat);
	}

};

ko.applyBindings(new ViewModel());