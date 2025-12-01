gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });

    gsap.to(".card", {
      boxShadow: "0 30px 70px rgba(0, 0, 0, 0.5)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
