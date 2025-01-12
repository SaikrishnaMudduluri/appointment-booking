import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:3000/api';
  const token = localStorage.getItem('token'); 


  // Check if the request URL is relative
  console.log(req.body);
  
  if (!req.url.startsWith('http')) {
    // Clone the request and prepend the base URL
    req = req.clone({
      url: `${baseUrl}${req.url}`
    });

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next(req);
  }

  // Proceed without modification for absolute URLs
  return next(req);
};
