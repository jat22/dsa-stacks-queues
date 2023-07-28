
// BROWSER BACK/FORWARD
// Back Stack
// 	push
// 		when a page is visited
// 	pop
// 		when the back button is pressed

// Forward Stack
// push
// 	current page when the back button is pressed
// pop
// 	when the forward button is pressed


function stringReversal(str){
	const stack = new Stack

	for(let char of str){
		stack.push(char)
	}

	let rStr = "";
	while(!stack.isEmpty()){
		const char = stack.pop()
		rStr = rStr + char
	}
	return rStr
}	


function balancedBrackets(str){

}

class ListItem {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor(num) {
		this.first = null;
		this.last = null;
		this.size = 0;
		for(let i = 1; i <= num; i++) this.push(i)
	}

	push(val) {
		const newItem = new ListItem(val);
		if(!this.first){
			this.first = newItem;
			this.last = this.first;
		} else{
			newItem.next = this.first
			newItem.prev = this.last
			this.last.next = newItem
			this.last = newItem
			this.first.prev = this.last
		}
		this.size++
	}

	kill(skip){
		let cur = this.first;
		let count = 0;
		while(this.size > 1){
			count++
			if(count === skip){
				cur.prev.next = cur.next
				cur.next.prev = cur.prev
				this.size--
				count = 0
			}
			cur = cur.next;
		}
		return cur.val
	}
}

function survivor(numPlp, skip){
	const people = new LinkedList(numPlp)
	const survivor = people.kill(skip)

	return survivor
}

class Char {
	constructor(char){
		this.val = char;
		this.next = null;
		this.prev = null
	}
}

class ExpList {
	constructor(str){
		this.first = null;
		this.last = null;
		this.size = 0;
		for(let char of str) this.unshift(char);
	}

	unshift(val){
		const newChar = new Char(val);
		if(!this.first){
			this.first = newChar;
			this.last = this.first;
		} else{
			newChar.next = this.first;
			this.first.prev = newChar;
			this.first = newChar;
		}
		this.size++
	}

	eval(){
		const currEval = []
		let cur = this.first

		while(cur){
			if(parseInt(cur.val)){
				currEval.push(cur.val)
			} else if(cur.val === " "){
				cur = cur.next
				continue
			} else {
				let result;
				switch(cur.val){
					case '+' :
						result = parseInt(currEval[0]) + parseInt(currEval[1]);
						break;
					case '-' :
						result = parseInt(currEval[1]) - parseInt(currEval[0]);
						break;
					case '*' :
						result = parseInt(currEval[0]) * parseInt(currEval[1]);
						break;
					case '/' :
						result = parseInt(currEval[1]) / parseInt(currEval[0]);
						break;
					default:
						throw new Error("Invalid operator")
				}
				currEval.length = 0;
				currEval.push(result)
			}
			cur = cur.next
		}
		return currEval[0]
	}
}

function calc(exp){
	const evaluation = new ExpList(exp)
	const result = evaluation.eval()
	return result
}

