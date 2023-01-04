class counter {
  constructor(classNames) {
    classNames = Array.isArray(classNames) ? classNames : [classNames];

    const elems = []
    classNames.forEach(className => {
      if (typeof className === 'string' && className !== '') {
        document.querySelectorAll(`.${className}`).forEach(item => {
          elems.push(item);
        })
      } else {
        throw new Error('className type is not string')
      }
    })
    this.elems = elems;
    this.speed = 20;
  }

  startCount(elem) {
    let count_in = Number(elem.innerText);
    const count_to = Number(elem.getAttribute('data-count'));

    let interval = setInterval(() => {
      count_in += Math.ceil(count_to / this.speed);
      elem.innerText = count_in > count_to ? count_to : count_in;

      if (Number(elem.innerText) === count_to) clearInterval(interval);
    }, 50);
  }

  // speed * 50 = number of ms when counter end
  // 20 * 50 = 1000ms = 1s is default
  init(speed) {
    this.speed = speed !== undefined ? speed : this.speed;
    this.elems?.forEach(elem => this.startCount(elem))
  }
}