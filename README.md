

## API Overview
The MoviesDatabase API provides comprehensive access to an extensive collection of movie and TV show data, including details such as titles, release years, ratings, cast information, and images. This RESTful API offers robust filtering capabilities, search functionality, and pagination support, making it ideal for building movie discovery applications. Key features include real-time data updates, multiple language support, and detailed metadata for entertainment content across various platforms.

## API Version
**Current Version:** v1.2.1  
**Base URL:** https://moviesdatabase.p.rapidapi.com  
**API Provider:** SAdrian via RapidAPI  
**Last Updated:** Based on RapidAPI documentation

## Available Endpoints

### 1. **GET /titles** - Retrieve Movie Titles
**Description:** Primary endpoint for fetching movie and TV show data with extensive filtering options.
- **Supported Parameters:**
  - `year`: Filter by release year (e.g., 2023)
  - `genre`: Filter by genre (e.g., Drama, Action)
  - `titleType`: Specify content type (movie, tvSeries, short, etc.)
  - `list`: Predefined lists (most_pop_movies, top_boxoffice_200)
  - `limit`: Number of results per page (default: 10)
  - `page`: Pagination page number
  - `info`: Detail level (base_info, mini_info)
  - `sort`: Sorting criteria (year.inc, year.dec, etc.)

### 2. **GET /titles/{id}** - Get Title by ID
**Description:** Retrieve detailed information for a specific movie or TV show using its unique identifier.
- **Path Parameter:** `id` - Unique title identifier

### 3. **GET /titles/search/title/{title}** - Search by Title
**Description:** Search for movies and TV shows by title with partial matching support.
- **Path Parameter:** `title` - Search query string
- **Query Parameters:** `exact` (boolean) for exact title matching

### 4. **GET /titles/utils/genres** - Get Available Genres
**Description:** Retrieve list of all available movie and TV show genres in the database.

### 5. **GET /titles/utils/titleTypes** - Get Title Types
**Description:** Get list of available title types (movie, tvSeries, short, video, etc.)

### 6. **GET /titles/random** - Get Random Titles
**Description:** Retrieve random selection of movies or TV shows with optional filtering.

## Request and Response Format

### Request Headers
```http
X-RapidAPI-Key: your_api_key_here
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
Content-Type: application/json
```

### Request Example - Fetch Popular Movies
```http
GET /titles?list=most_pop_movies&limit=20&page=1&info=base_info
Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

### Response Example - Successful Request
```json
{
  "page": 1,
  "next": "/titles?list=most_pop_movies&limit=20&page=2",
  "entries": 1000,
  "results": [
    {
      "id": "tt1234567",
      "primaryImage": {
        "url": "https://example.com/poster.jpg",
        "width": 800,
        "height": 1200
      },
      "titleType": {
        "text": "Movie",
        "id": "movie"
      },
      "titleText": {
        "text": "Movie Title"
      },
      "originalTitleText": {
        "text": "Original Movie Title"
      },
      "releaseYear": {
        "year": 2023,
        "endYear": null
      },
      "releaseDate": {
        "day": 15,
        "month": 3,
        "year": 2023
      }
    }
  ]
}
```

### Response Example - Error
```json
{
  "message": "Invalid API key",
  "status_code": 401
}
```

## Authentication
**Authentication Method:** API Key via RapidAPI  
**Header Format:**
```http
X-RapidAPI-Key: YOUR_RAPIDAPI_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

**Setup Instructions:**
1. Sign up for a RapidAPI account
2. Subscribe to the MoviesDatabase API
3. Obtain your API key from the RapidAPI dashboard
4. Store the API key in environment variables:
   ```env
   NEXT_PUBLIC_MOVIES_API_KEY=your_api_key_here
   ```
5. Include the API key in all requests via headers

## Error Handling

### Common HTTP Status Codes
- **200 OK:** Request successful
- **400 Bad Request:** Invalid parameters or malformed request
- **401 Unauthorized:** Missing or invalid API key
- **403 Forbidden:** Insufficient permissions or quota exceeded
- **404 Not Found:** Resource not found
- **429 Too Many Requests:** Rate limit exceeded
- **500 Internal Server Error:** Server-side issue

### Error Response Format
```json
{
  "message": "Error description",
  "status_code": 400,
  "error": "Detailed error information"
}
```

### Error Handling Best Practices
1. **Implement Try-Catch Blocks:** Wrap all API calls in try-catch
2. **Check Response Status:** Verify HTTP status before processing
3. **Handle Rate Limiting:** Implement exponential backoff for 429 errors
4. **User Feedback:** Display appropriate error messages to users
5. **Fallback Content:** Provide default content when API fails
6. **Logging:** Log errors for debugging and monitoring

## Usage Limits and Best Practices

### Rate Limits
- **Free Tier:** 500 requests per month
- **Basic Tier:** 10,000 requests per month
- **Pro Tier:** 100,000 requests per month
- **Ultra Tier:** 1,000,000+ requests per month

### Best Practices
1. **Caching Strategy:**
   - Cache API responses client-side when appropriate
   - Implement server-side caching for frequently accessed data
   - Set reasonable cache expiration times

2. **Pagination Implementation:**
   - Use `limit` parameter to control response size (recommended: 20-50 items)
   - Implement infinite scroll or numbered pagination
   - Pre-fetch next page data for smoother user experience

3. **Efficient Filtering:**
   - Combine filters to reduce unnecessary requests
   - Use specific title types when searching
   - Leverage predefined lists for common queries

4. **Performance Optimization:**
   - Request only needed fields using the `info` parameter
   - Implement lazy loading for images
   - Use debouncing for search inputs
   - Batch related requests when possible

5. **API Key Security:**
   - Never expose API keys in client-side code
   - Use Next.js API routes as proxy for API calls
   - Store API keys in environment variables
   - Rotate API keys periodically

6. **Data Handling:**
   - Validate and sanitize all user inputs
   - Implement proper TypeScript interfaces for API responses
   - Handle missing data gracefully (e.g., placeholder images)
   - Format dates and numbers for user locale

7. **Monitoring and Maintenance:**
   - Monitor API usage and quota consumption
   - Set up alerts for approaching limits
   - Keep API client updated with API changes
   - Test error scenarios during development

### Development Recommendations
- **Start with Free Tier:** Begin development with free tier to understand API capabilities
- **Use Mock Data:** Create mock API responses for development and testing
- **Implement Loading States:** Show loading indicators during API calls
- **Add Retry Logic:** Implement retry mechanism for failed requests
- **Test Edge Cases:** Test with empty responses, rate limits, and network errors
- **Document API Integration:** Maintain documentation of your implementation

This comprehensive understanding of the MoviesDatabase API will serve as the foundation for building the CineSeek movie discovery application with proper error handling, efficient data fetching, and optimal user experience.
