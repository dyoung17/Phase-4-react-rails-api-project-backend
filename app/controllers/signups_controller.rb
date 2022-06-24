class SignupsController < ApplicationController


    def index
render json: Signup.all
    end

    def create
        volunteer = Volunteer.find(session[:volunteer_id])
        signup = volunteer.signups.create!(signup_params)
        render json: signup
    end

    def destroy
        signup = Signup.find(params[:id])
        signup.destroy
        head :no_content
    end

    private

    def signup_params
        params.permit(:event_id)
    end
end
