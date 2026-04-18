const loadImages = (glob) =>
  Object.keys(glob)
    .sort((a, b) => {
      const num = (s) => parseInt(s.match(/(\d+)\.png$/)?.[1] ?? 0);
      return num(a) - num(b);
    })
    .map((k) => glob[k].default ?? glob[k]);

export const onlineDressImages = loadImages(
  import.meta.glob("../assets/online_dress/*.png", { eager: true })
);

export const adminPanelImages = loadImages(
  import.meta.glob("../assets/admin_panel/*.png", { eager: true })
);

export const nextjsEcomImages = loadImages(
  import.meta.glob("../assets/nextjs_ecommerce/*.png", { eager: true })
);