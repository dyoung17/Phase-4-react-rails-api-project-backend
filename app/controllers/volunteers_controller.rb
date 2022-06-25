class VolunteersController < ApplicationController
    
    def index
        render json: Volunteer.all
    end

    def create
        volunteer = Volunteer.create(volunteer_params)
        if volunteer.valid?
         session[:volunteer_id] = volunteer.id
        render json: volunteer, status: :created
       else
        render json: {errors: volunteer.errors.full_messages}, status: :unprocessable_entity
        
       end
    end

    def update
        volunteer = Volunteer.find(params[:id])
        volunteer.update!(volunteer_params)
        render json: volunteer
    end

    def show 
        volunteerevents = Volunteer.find_by(id: session[:volunteer_id])
        # volunteerevents = Volunteer.find(params[:id])
        render json: volunteerevents, serializer: VolunteerWithEventsSerializer
    end

    private 
    def volunteer_params
        params.permit(:first_name, :last_name, :age, :phone_number, :email, :password, :username, :password_confirmation)
    end
end
