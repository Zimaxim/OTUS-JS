//
// Write a getPath function, which finds an unique path for an element inside a document.
// getPath(node) // => "div>div:nth-child(2)>span"
//


function getPath(node) {

	// порядковый номер элемента на своем уровне
	function nthChild(elm) {
		var childNumber = 0,
			childNodes = elm.parentNode.childNodes;

		for (var index = 0; index < childNodes.length; ++index) {
			if (childNodes[index].nodeType === 1)
				++childNumber;

			if (childNodes[index] === elm)
				return childNumber;
		}
	}

	function makePath(elm, rootNode, list) {
		var tag = elm.tagName.toLowerCase(),
			className = elm.getAttribute('class'),
			id = elm.getAttribute('id'),
			selector = [tag];  // (id) ? [tag + '#' + id.trim()] : [tag];


		if (className)
			selector.push((" " + className).replace(/\s+/g, (str) => ' .' + str.trim()));

		if (tag !== 'html' && tag !== 'body' && elm.parentNode) {
			var v_nthChild = nthChild(elm);
			if (v_nthChild > 1)
				selector.push(':nth-child(' + v_nthChild + ')');
		}

		list.unshift(selector.join(''));

		if (elm.parentNode && elm.parentNode !== rootNode && elm.parentNode.tagName) {
			makePath(elm.parentNode, rootNode, list);
		}

		return list;

	}

	return makePath(node, document.body, []).join('>');

}

document.addEventListener("DOMContentLoaded", function (event) {
	// div>div:nth-child(2)>span

	console.log(getPath(document.getElementById("I-am-here")));
	console.log(getPath(document.getElementById("and-here")));
});
