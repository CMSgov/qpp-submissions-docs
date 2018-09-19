import React from 'react';

class RateLimiting extends React.Component {
  render() {
    return (
      <div>
        <h1 className='ds-h1'>Rate Limiting</h1>

        <p className='ds-text'>For all requests to the Submissions API endpoints, both in the Developer Preview and the Production environments, the rate limit allows for up to 25 requests per second (over a two-minute period), with a burst threshold of 40 requests per second (over a five-second period). Requests are associated with the originating IP address, not the user making requests. </p>
        <p className='ds-text'>While we are actively working on identifying and addressing bottlenecks within the QPP system that may be impacting API performance, we recommend that you proactively modify your queuing processes to the API to minimize the probability of your encountering any performance issues. </p>
        <p className='ds-text'>Specific recommendations:</p>
        <ul>
          <li>Spread your requests over a longer period of time. We recommend not exceeding 15 requests per second.</li>
          <li>If you exceed the rate limit, you will receive a 429 Too Many Requests response, and your IP address will be blocked for 10 minutes. However, this 10-minute block is applied after you've terminated your excessive activity. So if you exceed the rate limit, you should cease your excessive activity for at least 10 minutes - otherwise, you will continue to receive 429s from the API.</li>
          <li>If your requests start to time-out, implement exponential backoff so that you do not continue to encounter timeouts (resource: <a href='https://cloud.google.com/storage/docs/exponential-backoff' target='_blank'> https://cloud.google.com/storage/docs/exponential-backoff)</a>.</li>
          <li>Use a connection timeout of 10 seconds - meaning, your application should abandon a request if it doesn't connect within 10 seconds.</li>
          <li>Use a maximum timeout of 60 seconds - meaning, your client should wait a maximum of 60 seconds for a response to be served by the QPP Submissions API.</li>
          <li>If you are running regular batch jobs, choose a time that is not exactly on the hour, so that the system is not overloaded with users who have all chose to run hourly on the hour.</li>
        </ul>
      </div>
    );
  }
}

export default RateLimiting;
