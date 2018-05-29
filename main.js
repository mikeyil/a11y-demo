// $('.btn').on('click', () => console.log('button clicked'));

$('.selectric').selectric();

$('#jsFocusButton').on('click', () => $('#jsFocusEl').focus());

// nav
const openEventTarget = ({ target }) =>
	$(target)
		.closest('.dropdown')
		.addClass('open');

const closeEventTarget = ({ currentTarget, relatedTarget }) =>
	!$(currentTarget).has(relatedTarget).length &&
	$(event.target)
		.closest('.dropdown')
		.removeClass('open');

$('.dropdown')
	.on('focusin mouseenter', openEventTarget)
	.on('focusout mouseleave', closeEventTarget);
