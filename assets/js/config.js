window.PETSTAY_CONFIG = {
  AWS_REGION: 'us-east-2',
  COGNITO_USER_POOL_ID: 'us-east-2_QE95UaiRH',
  COGNITO_USER_POOL_CLIENT_ID: '58fpjcpmp7u35cl0mqgcpo8hur',
  COGNITO_DOMAIN: 'us-east-2qe95uairh.auth.us-east-2.amazoncognito.com',

  REDIRECT_SIGN_IN_URL: 'https://main.d18pgoc9fdlixd.amplifyapp.com/admin-frontend/post-login.html',
  REDIRECT_ADMIN_SIGN_IN_URL: 'https://main.d18pgoc9fdlixd.amplifyapp.com/admin-frontend/post-login.html',
  REDIRECT_SIGN_OUT_URL: 'https://main.d18pgoc9fdlixd.amplifyapp.com/index.html',

  API_BASE_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com',
  BOOKING_API_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/booking',
  BOOKING_STATUS_API_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/bookingStatus',
  BOOKINGS_API_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/bookings',
  ROOMS_AVAILABILITY_API_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/rooms/availability',
  NEW_BOOKING_API_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/newbooking',
  CONFIRM_BOOKING_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/confirm',
  CANCEL_BOOKING_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/cancel',
  CHECKIN_BOOKING_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/checkin',
  CHECKOUT_BOOKING_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/checkout',
  RESTORE_BOOKING_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/restore',
  PET_PHOTO_UPLOAD_URL: 'https://24q261zi50.execute-api.us-east-1.amazonaws.com/upload-url',
  PET_PHOTO_PUBLIC_URL_BASE: 'https://petstay-pet-photos-101486688.s3.amazonaws.com',

  IOT_ENDPOINT: 'a14wno4fkns9pt-ats.iot.us-east-1.amazonaws.com',  // Your IoT endpoint
  IOT_TOPIC_DASHBOARD: 'petstay/admin/stats',  // Your MQTT topic
  IOT_CLIENT_PREFIX: 'admin-dashboard-',                       // Optional client ID prefix
  IDENTITY_POOL_ID: 'us-east-1:25fbdcc1-9e3d-4655-adbf-679d2f895c0c',
};

for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}

// window.PETSTAY_CONFIG = {
//   AWS_REGION: '{{AWS_REGION}}',  // e.g., 'us-east-1'
//   COGNITO_USER_POOL_ID: '{{COGNITO_USER_POOL_ID}}',
//   COGNITO_USER_POOL_CLIENT_ID: '{{COGNITO_USER_POOL_CLIENT_ID}}',
//   COGNITO_DOMAIN: '{{COGNITO_DOMAIN}}',  // e.g., 'yourdomain.auth.us-east-1.amazoncognito.com'

//   // Redirect after staff login (check-in page)
//   REDIRECT_SIGN_IN_URL: '{{REDIRECT_SIGN_IN_URL}}',  // e.g., 'https://yourdomain/checkin.html'

//   // Redirect after logout
//   REDIRECT_SIGN_OUT_URL: '{{REDIRECT_SIGN_OUT_URL}}',  // e.g., 'https://yourdomain/index.html'

//   // Redirect after admin login
//   REDIRECT_ADMIN_SIGN_IN_URL: '{{REDIRECT_ADMIN_SIGN_IN_URL}}',  // e.g., 'https://yourdomain/admin/post-login.html'

//   API_BASE_URL: '{{API_BASE_URL}}',
//   BOOKING_API_URL: '{{BOOKING_API_URL}}',
//   BOOKING_STATUS_API_URL: '{{BOOKING_STATUS_API_URL}}',
//   BOOKINGS_API_URL: '{{BOOKINGS_API_URL}}',
//   ROOMS_AVAILABILITY_API_URL: '{{ROOMS_AVAILABILITY_API_URL}}',
//   NEW_BOOKING_API_URL: '{{NEW_BOOKING_API_URL}}',
//   CONFIRM_BOOKING_URL: '{{CONFIRM_BOOKING_URL}}',
//   CANCEL_BOOKING_URL: '{{CANCEL_BOOKING_URL}}',
//   CHECKIN_BOOKING_URL: '{{CHECKIN_BOOKING_URL}}',
//   CHECKOUT_BOOKING_URL: '{{CHECKOUT_BOOKING_URL}}',
//   RESTORE_BOOKING_URL: '{{RESTORE_BOOKING_URL}}'
// };

// // Validate config: prevent accidental deployment with missing placeholders
// for (const key in window.PETSTAY_CONFIG) {
//   if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
//     throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
//   }
// }
