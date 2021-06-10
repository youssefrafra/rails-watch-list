class BookmarksController < ApplicationController
    def new
        @list = List.find(params[:list_id])
        @bookmark = Bookmark.new
    end

    def create
        @list = List.find(params[:list_id])
        @bookmark = Bookmark.new(bookmark_params)
        @movie = Movie.find(params[:bookmark][:movie_id])
        @bookmark.movie = @movie
        @bookmark.list = @list    
        @bookmark.save
        # raise
        redirect_to list_path(params[:list_id])
    end

    def destroy
        @bookmark = Bookmark.find(params[:id])
        @list = @bookmark.list
        @bookmark.destroy
        redirect_to list_path(@list)
    end

    private

    def bookmark_params
        params.require(:bookmark).permit(:comment)
      end
end
