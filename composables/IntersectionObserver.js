const isClient = typeof document !== 'undefined'

const options = {
  root: isClient ? document.el : null,
  rootMargin: '0px',
  threshold: 0.5
}

const callback = ( entries, observer ) => {
  entries.forEach(( entry ) => {
    // console.log('ENTRY', entry)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
// console.log('entry')
//       console.dir(entry)

    if(entry.isIntersecting === true) {
      entry.target.classList.add('animated')
      return
    }

    entry.target.classList.remove('animated')

  });
};

const observer = isClient ? new IntersectionObserver(callback, options) : null

export function useIntersectionObserver (observables) {

  let intersections = []

  onMounted(() => {
    intersections = observables.value.querySelectorAll('.intersection')

    intersections.forEach(element => {
      observer.observe(element)
    })
  })

  onBeforeUnmount(() => {
    intersections.forEach(element => {
      observer.unobserve(element)
    })
  })

}
