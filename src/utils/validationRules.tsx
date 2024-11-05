export const passwordRules = [
          {
            min: 8,
            message: (
              <span className="error_message">
                Password must be at least 8 characters
              </span>
            ),
          },
          {
            pattern: /(?=.*[A-Z])/,
            message: (
              <span className="error_message">
                Password must contain at least one uppercase letter
              </span>
            ),
          },
          {
            pattern: /(?=.*[@$!%*?&])/,
            message: (
              <span className="error_message">
                Password must contain at least one least one special character
                (like @, $, %, *, ?, &)
              </span>
            ),
          },
        ]
