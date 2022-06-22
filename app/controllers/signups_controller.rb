class SignupsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        signup = Signup.create!(signup_params)
        render json: signup
    end

    def destroy
        signup = Signup.find(params[:id])
        signup.destroy
        head :no_content
    end

    private

    def signup_params
        params.permit(:volunteer_id, :event_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Signup not found"}, status: :not_found
    end
end
