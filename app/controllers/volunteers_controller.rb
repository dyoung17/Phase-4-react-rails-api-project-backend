class VolunteersController < ApplicationController
    

    def create
        volunteer = Volunteer.create!(volunteer_params)
        render json: volunteer
    end

    def update
        volunteer = Volunteer.find(params[:id])
        volunteer.update!(volunteer_params)
        render json: volunteer
    end

    def show 
        # volunteerevents = Volunteer.find_by(id: session[:volunteer_id])
        volunteerevents = Volunteer.find(params[:id])
        render json: volunteerevents, serializer: VolunteerWithEventsSerializer
    end

    private 
    def volunteer_params
        params.permit(:first_name, :last_name, :age, :phone_number, :email, :password, :username)
    end
end
