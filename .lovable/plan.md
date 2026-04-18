
Replace fictional testimonials with real Google reviews from the Scholar's Hub Goa Coaching Centre Google Business listing.

**From the Google listing:**
- Rating: 5.0 (40 Google reviews)
- JustDial: 5.0 (39 ratings)
- Real reviewers visible:
  1. Sudesh Rivonkar — "The environment is friendly, and they give personal attention to each student."
  2. Alka Rivonkar — "The study environment is professional and highly motivating."
  3. Gaurish Kudalkar — "It's Really Good Experience Here And Teachers Are Really Good"

**Changes to `src/pages/Testimonials.tsx`:**
1. Replace the 9 fictional testimonials with the 3 verified Google reviews (each marked as "Google Review", 5 stars). Keep the cards visually balanced — use a centered grid for 3 items.
2. Update the Stats section to reflect real data:
   - 5.0/5 Average Rating (was 4.9/5)
   - 40+ Google Reviews (was 500+ Happy Students)
   - 100% Recommend Us (was 98%)
3. Add a small note/CTA below the grid linking to the Google reviews page so visitors can read more / leave their own.

No other files need changes.

<lov-actions>
<lov-suggestion message="Test the testimonials page end-to-end on mobile and desktop to verify it looks good">Verify it works</lov-suggestion>
<lov-suggestion message="Add a 'Leave a Google Review' button that opens the Google review form directly">Add review CTA button</lov-suggestion>
<lov-suggestion message="Embed the live Google rating badge (5.0 / 40 reviews) on the homepage hero section">Show rating on homepage</lov-suggestion>
</lov-actions>
