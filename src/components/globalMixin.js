import axios from "axios";

export default {
    data() {
        return {
            postsUrl: 'https://techcrunch.com/wp-json/wp/v2/posts',
            posts: [],
            postsData: {
                per_page: 10,
                page: 1
            },
            pagination: {
              prevPage: '',
              nextPage: '',
              totalPages: '',
              from: '',
              to: '',
              total: '',
          },
        }
    },
  created: function() {
    this.getPosts();
  },
  methods: {
    getPosts() {
        axios.get(this.postsUrl, {params: this.postsData})
            .then((response) => {
                this.posts = response.data.map(({
                  id,
                  date,
                  title,
                  excerpt,
                  content,
                  parsely,
                }) => ({
                  id,
                  date,
                  title: title.rendered,
                  shortPost: `${excerpt.rendered.replace('<p>',"").slice(0, 150).trim()}`,
                  fullPost: content.rendered,
                  image: parsely.meta.image.url,
                  author: parsely.meta.author[0].name,
                  readingTime: this.calcReadingTime(content.rendered),
                }));
                this.configPagination(response.headers);
            })
            .catch( (error) => {
                console.log(error);
            });
    },
    configPagination(headers) {
      this.pagination.total = +headers['x-wp-total'];
      this.pagination.totalPages = +headers['x-wp-totalpages'];
      this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
      this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
      this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
      this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';
  },
  calcReadingTime(text) {
    const wpm = 250;
    let result;
    let textLength = text.split(" ").length;
    if(textLength > 0){
      let value = Math.ceil(textLength / wpm);
      result = `${value} Min Read`;
      return result;
    }
  }
  }
};