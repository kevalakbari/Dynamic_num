const counters = document.querySelectorAll('.counter');


counters.forEach((counter) => {
    counter.innerHTML = 0;


    const updatecounter = () => {
        const targetCount = +counter.getAttribute('data-target')
        // console.log(targetCount)
        const startingvalue = Number(counter.innerHTML);

        const incrValue = targetCount / 100;

        if (startingvalue < targetCount) {
            counter.innerHTML = `${Math.round(startingvalue + incrValue)}`;
            // setTimeout(updatecounter, 1000);
            setTimeout(updatecounter,10);

        }else{
            counter.innerHTML = targetCount

        }
    }

    updatecounter();

})
