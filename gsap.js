const animation1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".js-cont-1",
      start: "80% 10%",
      markers: true,
    },
  })
  .to(".js-10-1", {
    x: "100%",
    skew: "45deg", // skew(45deg)をskewXとして正しく指定
  })

  .from(".js-10-3", {
    y: 10,
    opacity: 0,
  })
  .from(".js-10-2", {
    opacity: 0,
  });

const animation2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".js-cont-2",
      start: "80% 10%",
      markers: true,
    },
  })
  .to(".js-11-1", {
    x: "-100%",
  })

  .from(".js-11-3", {
    y: "-10px",
    opacity: 0,
  })
  .from(".js-11-3", {
    filter: "blur(5px)",
  })
  .from(".js-11-2", {
    opacity: 0,
  });

const animation3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".js-cont-3",
      start: "80% 10%",
      markers: true,
    },
  })
  .to(".js-12-1", {
    x: "100%",
  })
  .to(
    ".js-12-2",
    {
      x: "-100%",
    },
    "<="
  )

  .from(
    ".js-12-4",
    {
      opacity: 0,
      scale: 0.8,
    },
    "-=0.2"
  )
  .from(".js-12-3", {
    opacity: 0,
  });

const animation4 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".js-cont-4",
      start: "80% 15%",
      markers: true,
    },
  })
  .to(".js-13-1", {
    width: "0",
    height: "0", // skew(45deg)をskewXとして正しく指定
  })
  .from(".js-13-2", {
    opacity: 0,
  });

const animation5 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".js-cont-4",
      start: "80% 15%",
      markers: true,
    },
  })
  .to(".js-14-1", {
    width: "200%",
    height: "200%", // skew(45deg)をskewXとして正しく指定
  })
  .from(".js-14-2", {
    opacity: 0,
  });
