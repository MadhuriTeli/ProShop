const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(400);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
      return next(err); // ✅ prevents double response
    }
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //check for Mongoose bad ObjectId
    if (err.name === 'CastError') {
        message = `Resouce not found`;
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? '0-0' : err.stack,
    });
};

export { notFound, errorHandler };