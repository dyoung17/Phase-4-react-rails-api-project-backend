class VolunteersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

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
        volunteerevents = Volunteer.find(params[:id])
        render json: volunteerevents, serializer: VolunteerWithEventsSerializer
    end

    private 
    def volunteer_params
        params.permit(:first_name, :last_name, :age, :phone_number, :email)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Volunteer not found"}, status: :not_found
    end
end
