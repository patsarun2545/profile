const loadImages = (glob) =>
  Object.keys(glob)
    .sort((a, b) => {
      const num = (s) => parseInt(s.match(/(\d+)\.(png|jpg|jpeg)$/)?.[1] ?? 0);
      return num(a) - num(b);
    })
    .map((k) => glob[k].default ?? glob[k]);

export const mobileStoreImages = loadImages(
  import.meta.glob("../assets/mobile_store/*.{png,jpg,jpeg}", { eager: true }),
);

export const onlineDressImages = loadImages(
  import.meta.glob("../assets/online_dress/*.png", { eager: true }),
);

export const adminPanelImages = loadImages(
  import.meta.glob("../assets/admin_panel/*.png", { eager: true }),
);

export const nextjsEcomImages = loadImages(
  import.meta.glob("../assets/nextjs_ecommerce/*.png", { eager: true }),
);

export const streamLiveImages = loadImages(
  import.meta.glob("../assets/stream_live/*.png", { eager: true }),
);

export const taskManagerImages = loadImages(
  import.meta.glob("../assets/task_manager/*.png", { eager: true }),
);

export const documindImages = loadImages(
  import.meta.glob("../assets/documind_ai/*.{png,jpg,jpeg}", { eager: true }),
);