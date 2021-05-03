console.log('here')

function onCardClicked (e) {
    const target = e.currentTarget;
    target.className = target.className.replace('color-hidden' , '').trim();
}