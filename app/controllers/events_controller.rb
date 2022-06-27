class EventsController < ApplicationController

    
    def index
        render json: Event.all
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    def create
        event = Event.create(event_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event, status: :accepted
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end

    private 

    def event_params
        params.permit(:name, :when, :location)
    end
end
