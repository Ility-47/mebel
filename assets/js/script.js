$(document).ready(function() {
    let  position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const next = $('.next');
    const back = $('.prew');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });

    back.click(function(){
        const itemsLost = Math.abs(position) / itemWidth
        position += itemsLost >= slidesToScroll ? movePosition : itemslost * itemWidth;
        setPosition();
        checkBtns();
    });

    next.click(function(){
        const itemsLost = itemsCount - ((Math.abs(position) + slidesToShow * itemWidth) / itemWidth);
        position -= itemsLost >= slidesToScroll ? movePosition : itemsLost * itemWidth;
        setPosition(); 
        checkBtns();   
    });
    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`,
        });
    };

    const checkBtns = () => {
        back.prop('disabled', position === 0);
        next.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
    }
    checkBtns();
});
