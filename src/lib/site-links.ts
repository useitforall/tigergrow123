export const WHATSAPP_NUMBER = "919182630158";
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/channel/UCvvwiL_m0-LVavyfP4a3CSw",
  instagram: "https://instagram.com/tigergrowtrader",
  telegram: "https://t.me/tigergrowtrader",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};
