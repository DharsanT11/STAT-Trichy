const WHATSAPP_NUMBER = '1234567890'; // Replace with actual WhatsApp number

export const openWhatsApp = (message = '') => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
};

export const getProductEnquiryMessage = (productName) => {
    return `Hi, I'm interested in "${productName}" listed on your website. Could you please share more details including pricing and availability?`;
};

export const getGeneralEnquiryMessage = () => {
    return `Hi, I'd like to enquire about your data recovery services. Please share more details.`;
};
