class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        render json: Event.all
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    private

    def render_not_found_response
        render json: { error: "Event not found"}, status: :not_found
    end


end
