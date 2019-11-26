import  { default as Feed } from "./feed";

describe("Feed component", () => {

    it("Searching for tweets can match same case strings", () => {
        const component = new Feed();
        const availableData = [
            { "text":"Chris Froome http://t.co/45ghK8R21A", "retweet_count":16, "favorite_count":16 },
            { "text":"Obama http://t.co/W9EaeulGs5", "retweet_count":13, "favorite_count":9 }
        ];

        const filteredItems = component.filterItems(availableData, "Ob"); // Finds "Obama"

        expect(filteredItems.length).toBe(1);
        expect(filteredItems[0].text).toBe("Obama http://t.co/W9EaeulGs5")
    });

    it("Searching for tweets can match case insensitive strings", () => {
        const component = new Feed();
        const availableData = [
            { "text":"Chris Froome http://t.co/45ghK8R21A", "retweet_count":16, "favorite_count":16 },
            { "text":"Obama http://t.co/W9EaeulGs5", "retweet_count":13, "favorite_count":9 }
        ];

        const filteredItems = component.filterItems(availableData, "ob"); // Finds "Obama"

        expect(filteredItems.length).toBe(1);
        expect(filteredItems[0].text).toBe("Obama http://t.co/W9EaeulGs5")
    });

    it("Filtering by top tweets only shows tweets with above 20 likes", () => {
      const component = new Feed();
      const availableData = [
          { "text":"Chris Froome http://t.co/45ghK8R21A", "retweet_count":26, "favorite_count":26 },
          { "text":"Obama http://t.co/W9EaeulGs5", "retweet_count":13, "favorite_count":9 }
      ];

      const topTweets = component.getTopTweets(availableData, 20); // Finds "Obama"

      expect(topTweets.length).toBe(1);
      expect(topTweets[0].text).toBe("Chris Froome http://t.co/45ghK8R21A")
  });

});